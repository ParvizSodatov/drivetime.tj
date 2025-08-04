"use client";

import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from '@/store/auth/store'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    setError(null);
    setIsLoading(true);

    const success = await login({ fullName, password });

    if (success) {
      router.push("/");
    } else {
      setError("Неверное имя или пароль");
    }

    setIsLoading(false);
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
          Откройте доступ к лучшим предложениям по продаже, аренде и запчастям
          для автомобилей. Всё, что нужно вашему авто — в одном месте.
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
            Вход
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            label="Имя"
            fullWidth
            margin="normal"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Войти"}
          </Button>

          <Typography variant="body2" align="center" mt={2}>
            Нет аккаунта?{" "}
            <Link className="text-blue-600 underline" href="/registration">
              Зарегистрироваться
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
