import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

interface JwtPayload {
  email: string;
  role?: string | string[];
  exp?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'auth_token';             // اسم المفتاح في localStorage
  private roleKey = 'user_role';              // لتخزين الـ Role
  private secretKey = 'OPTIMUM_SUPER_SECRET';  // مفتاح التشفير (غيّريه)
  private baseUrl = 'https://localhost:7264/api/Account'; // API base URL

  constructor(private http: HttpClient, private router: Router) {}

  // =========================================================
  // 🔹 LOGIN
  // =========================================================
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  // =========================================================
  // 🔹 REGISTER
  // =========================================================
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // =========================================================
  // 🔹 SAVE TOKEN (Encrypted)
  // =========================================================
  saveToken(token: string) {
    const encrypted = CryptoJS.AES.encrypt(token, this.secretKey).toString();
    localStorage.setItem(this.tokenKey, encrypted);
  }

  // =========================================================
  // 🔹 GET TOKEN (Decrypted)
  // =========================================================
  getToken(): string | null {
    const encrypted = localStorage.getItem(this.tokenKey);
    if (!encrypted) return null;

    try {
      const bytes = CryptoJS.AES.decrypt(encrypted, this.secretKey);
      const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedToken || null;
    } catch {
      return null;
    }
  }

  // =========================================================
  // 🔹 SAVE ROLE (from login response)
  // =========================================================
  saveRole(role: string) {
    localStorage.setItem(this.roleKey, role);
  }

  getStoredRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  // =========================================================
  // 🔹 DECODE TOKEN
  // =========================================================
  decodeToken(): JwtPayload | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<JwtPayload>(token);
    } catch {
      return null;
    }
  }

  // =========================================================
  // 🔹 GET ROLE
  // =========================================================
  getRole(): string | null {
    const payload = this.decodeToken();

    // لو مستقبلاً ضفتي الـ role جوّه الـ JWT
    if (payload && payload.role) {
      if (Array.isArray(payload.role) && payload.role.length) {
        return payload.role[0];
      }
      if (typeof payload.role === 'string') {
        return payload.role;
      }
    }

    // دلوقتي: بناخدها من اللي اتخزن من ريسبونس الـ Login
    const storedRole = this.getStoredRole();
    return storedRole ?? null;
  }

  // =========================================================
  // 🔹 CHECK LOGGED IN
  // =========================================================
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // =========================================================
  // 🔹 LOGOUT
  // =========================================================
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    this.router.navigate(['/']);
  }
}
