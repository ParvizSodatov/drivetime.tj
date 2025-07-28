'use client'

import React from 'react'
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material'

type Car = {
	id: number
	year: number
	title: string
	image: string
}
const fakeCars: Car[] = [
	{
		id: 1,
		year: 2018,
		title: 'Kolotka',
		image: '/parviz/kolotka.png',
	},
	{
		id: 2,
		year: 2018,
		title: 'swetch',
		image: '/parviz/swech.png',
	},
	{
		id: 3,
		year: 2018,
		title: ' Air filter',

		image: '/parviz/filter.png',
	},
	{
		id: 4,
		year: 2018,
		title: 'Baterry',
		image: '/parviz/baterry.png',
	},
	{
		id: 5,
		year: 2018,
		title: 'rull',
		image: '/parviz/rull.png',
	},
	{
		id: 6,
		year: 2018,
		title: 'balon',
		image: '/parviz/balon.png',
	}
	,
	{
		id: 6,
		year: 2018,
		title: 'far',
		image: '/parviz/far.png',
	},
	{
		id: 7,
		year: 2018,
		title: 'oil',
		image: '/parviz/oil.png',
	}
]
const PartCard = () => {
	return (
		<Grid container spacing={2}>
			{fakeCars.map(car => (
				<div key={car.id}>
					<Card
						elevation={0}
						sx={{
							width: '270px',
							height: '300px',
							borderRadius: 2,
							border: '1px solid #e0e0e0',
							boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
							overflow: 'hidden',
							transition: 'box-shadow 0.3s ease',
							'&:hover': {
								boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
							},
						}}
					>
						<CardMedia
							component='img'
							image={car.image}
							alt={car.title}
							sx={{
								width: '270px',
								height: '230px',
								objectFit: 'cover',
								borderRadius: '10px',
							}}
						/>
						<CardContent sx={{ px: 2, pt: 1.5, pb: 2 }}>
							<Typography
								variant='h6'
								fontWeight={600}
								sx={{ fontSize: '18px', lineHeight: '22px', mb: '10px' }}
							>
								{car.title}
							</Typography>
						</CardContent>
					</Card>
				</div>
			))}
		</Grid>
	)
}

export default PartCard
