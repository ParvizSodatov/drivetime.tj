"use client";

import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Paper,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from '@/store/pages/registration/registr';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { register, isLoading } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    try {
      await register(name, email, password);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      router.push('/login');
    } catch (err: any) {
      setError(err.message || "Ошибка регистрации");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Левая часть */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#1976d2",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 4,
          py: 6,
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          DriveTime.tj
        </Typography>
        <Typography variant="h6" gutterBottom>
          Добро пожаловать!
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", maxWidth: 400 }}>
          Откройте доступ к лучшим предложениям по продаже, аренде и запчастям для автомобилей. Всё, что нужно вашему авто — в одном месте.
        </Typography>
      </Box>

      {/* Правая часть */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 4,
          py: 6,
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Регистрация
          </Typography>
          <Typography variant="body2" mb={2}>
            Создайте аккаунт, чтобы начать пользоваться DriveTime.tj
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Имя"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              required
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              type="email"
              required
            />
            <TextField
              label="Пароль"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
            <TextField
              label="Подтвердите пароль"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              disabled={isLoading}
            >
              {isLoading ? "Загрузка..." : "Зарегистрироваться"}
            </Button>
          </form>

          <Typography variant="body2" align="center" mt={2}>
            Уже есть аккаунт?{" "}
            <Link className="text-blue-600 underline" href="/login">
              Войти
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
