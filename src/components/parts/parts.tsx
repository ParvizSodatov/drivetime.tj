'use client'

import React from 'react'
import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@mui/material'

type Car = {
	id: number
	year: number
	title: string
	image: string
}
const fakeCars: Car[] = [
	{ id: 1, year: 2018, title: 'Kolotka', image: '/parviz/a1.png' },
	{ id: 2, year: 2018, title: 'Swetch', image: '/parviz/a2.png' },
	{ id: 3, year: 2018, title: 'Air Filter', image: '/parviz/a3.png' },
]

const Parts = () => {
	return (
		<Grid container justifyContent="start" spacing={7}>
			{fakeCars.map(car => (
				<Grid key={car.id} xs={12} sm={6} md={4}>
					<Card
						elevation={0}
						sx={{
							borderRadius: 3,
							overflow: 'hidden',
							boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
					
							transition: 'transform 0.3s ease',
							'&:hover': {
								transform: 'translateY(-4px)',
								boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
							},
						}}
					>
						<CardMedia
							component="img"
							image={car.image}
							alt={car.title}
							sx={{
								width: '100%',
								height: 180,
								objectFit: 'cover',
							}}
						/>
						<CardContent sx={{ py: 2 }}>
							<Typography variant="subtitle1" fontWeight={600}>
								{car.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Надёжная запчасть по хорошей цене
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	)
}

export default Parts
