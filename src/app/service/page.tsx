"use client"

import { useServiceStore } from "@/store/pages/sto/sto"
import { useEffect } from "react"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Stack,
  Rating,
  Divider,
  useTheme,
} from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import StarIcon from "@mui/icons-material/Star"
import Link from 'next/link'

export default function Service() {
  const { serviceStations, getServiceStations } = useServiceStore()
  const theme = useTheme()

  useEffect(() => {
    getServiceStations()
  }, [])

  return (
    <Box sx={{ py: 6, px: 2, maxWidth: "1300px", mx: "auto" }}>
      <Typography variant="h4" align="center" fontWeight="bold" mb={5} color="text.primary">
        Надёжные автосервисы рядом с вами
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          "& > div": {
            flexBasis: {
              xs: "100%",
              sm: "calc(50% - 12px)",
              md: "calc(33.33% - 16px)",
              lg: "calc(25% - 18px)",
            },
            maxWidth: {
              xs: "100%",
              sm: "calc(50% - 12px)",
              md: "calc(33.33% - 16px)",
              lg: "calc(25% - 18px)",
            },
          },
        }}
      >
        {serviceStations.map((el) => (
          <Box key={el.id}>
          <Link href={`/service/${el.id}`}>
			   <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: theme.shadows[6],
                transition: theme.transitions.create("box-shadow", {
                  duration: theme.transitions.duration.shortest,
                }),
                "&:hover": {
                  boxShadow: theme.shadows[12],
                  transform: "translateY(-4px)",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                },
                overflow: "hidden",
              }}
            >
              <CardMedia>
                <Box sx={{ position: "relative", height: 200, width: "100%" }}>
                  <Image
                    src={el.imageUrl || "/placeholder.svg"}
                    alt={el.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "50%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
                      display: "flex",
                      alignItems: "flex-end",
                      p: 2,
                    }}
                  >
                    <Typography variant="h6" color="white" fontWeight="bold">
                      {el.name}
                    </Typography>
                  </Box>
                </Box>
              </CardMedia>

              <CardContent
                sx={{
                  flexGrow: 1,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 360, 
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mb={2}
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      minHeight: 48, 
                    }}
                  >
                    {el.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Stack spacing={1} mb={2}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocationOnIcon color="action" fontSize="small" />
                      <Typography variant="body2" color="text.primary">
                        {el.location}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <PhoneIcon color="action" fontSize="small" />
                      <Typography variant="body2" color="text.primary">
                        {el.phone}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <EmailIcon color="action" fontSize="small" />
                      <Typography variant="body2" color="text.primary">
                        {el.email}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AccessTimeIcon color="action" fontSize="small" />
                      <Typography variant="body2" color="text.primary">
                        {el.workingHours}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Divider sx={{ my: 2 }} />
                </Box>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Rating
                      value={el.rating}
                      precision={0.5}
                      readOnly
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <Typography variant="body2" fontWeight="medium">
                      {el.rating} / 5
                    </Typography>
                  </Stack>
                  <Chip
                    label={el.isOpen ? "Открыто" : "Закрыто"}
                    color={el.isOpen ? "success" : "error"}
                    size="small"
                    sx={{ fontWeight: "bold" }}
                  />
                </Stack>
              </CardContent>
            </Card>
			 </Link>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
