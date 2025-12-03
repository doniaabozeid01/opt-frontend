import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onLogin() {
    this.errorMessage = '';
    this.isLoading = true;

    const loginData = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginData).subscribe({
      next: (res) => {
        console.log(res);
        
        // 1) خزّني التوكن (هيتشفّر جوّه AuthService)
        this.authService.saveToken(res.token);

        // 2) خدي الـ role من الريسبونس (roles[0])
        const role = res.roles && res.roles.length ? res.roles[0] : null;

        if (role) {
          this.authService.saveRole(role); // نخزّنه في localStorage
        }

        // 3) روّحيه على الـ layout حسب الدور
        if (role === 'Supplier') {
          this.router.navigate(['/supplier']);
        } else if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          // مدرسة / Client
          this.router.navigate(['/client']);
        }

        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = 'Invalid email or password';
        this.isLoading = false;
      }
    });
  }
}
