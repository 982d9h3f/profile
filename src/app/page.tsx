"use client";
import Image from "next/image";
import { Box, Flex, Button, Text, VStack, Heading, HStack } from "@chakra-ui/react";

type OverlayBoxProps = {
	imageUrl: string;
	title: string;
	description: string;
};

const OverlayBox: React.FC<OverlayBoxProps> = ({ imageUrl, title, description }) => (
	<Box
		position="relative"
		bgImage={`url(${imageUrl})`}
		backgroundSize="cover"
		backgroundPosition="center"
		bgRepeat="no-repeat"
		h="200px"
		w="100%"
		display="flex"
		flexDirection="column"
		justifyContent="center"
		alignItems="center"
		color="white"
		textAlign="center"
		textShadow="0px 0px 4px rgba(255,255,255,0.2)"
		border="1px solid rgba(255,255,255,1)"
	>
		<Box
			position="absolute"
			top="0"
			left="0"
			width="100%"
			height="100%"
			bg="rgba(0, 0, 0, 0.5)"
			zIndex="1"
		/>

		<Box position="relative" zIndex="2">
			<Text fontSize="20px" fontWeight="bold">{title}</Text>
			<Text fontSize="16px">{description}</Text>
		</Box>
	</Box>
);


export default function ProfilePage() {
	return (<>
		<Flex justifyContent="center" alignItems="center" minH="100vh" bg="gray.100">
			<Box alignItems="flex-start" color="gray.800" maxW="600px" w="100%">
				<Box w="100%" display="flex" flexDirection="column" alignItems="center" my={5}>
					<Text fontSize="25px">I'll learn as it needed!</Text>
					<Image
						className="rounded-full"
						src="/icon.jpg"
						alt="Profile Picture"
						width={100}
						height={100}
						priority
					/>
					<Text fontSize="25px">Kohei Y</Text>
					<Text fontSize="16px" color="gray.600" mb={3}>Full-Stack Developer</Text>
				</Box>
				<Box maxW="600px">
					<Text fontSize="20px">Timeline</Text>
					<Text fontSize="16px" color="gray.600">{`
					Now < Solo Entrepreneur (1year) < Working for a Manufacturing Company in Research and Development (3y) 
					< Master's Degree in Electronic Engineering from a National University (2y)
				`}</Text>
					<Text fontSize="20px" mt={3}>Domain Knowledge</Text>
					<Text fontSize="16px" color="gray.600" mb={0}>
						(1y) TypeScript, Next.js, AI-Coding<br />
						(4y) Crypto Trading, Macroeconomics, Electronic Circuit<br />
						(Learning) Business administration, Social Media Marketing<br />
						(Sub) AWS, X Account Management, Stable Diffusion, Fusion 360, 3D Printing ,Python, Solidity, C, C++, C#, Verilog HDL<br />
					</Text>
				</Box>

				<Box w="100%" display="flex" flexDirection="column" alignItems="center" my={5}>
					<Text fontSize="20px" color="gray.800" my={2}>What I did ⇓</Text>
					<OverlayBox
						imageUrl="/sakura.png"
						title="Stripe Checkout, Copywriting, PhotoShoot, Web designing."
						description="A branding site of a commemorative silver medal."
					/>
					<OverlayBox
						imageUrl="/mySnap.png"
						title="Large Size project of 40,000 lines TypeScript, Pinterest Like modanaied social media web apprication, Sarverless arkitecture"
						description="A Japanese AI-art community diven projyect"
					/>
					<OverlayBox
						imageUrl="/mandara.png"
						title="NFT market place, realtime custom 3D model rendaring."
						description="Web3 on-bording project"
					/>
					<OverlayBox
						imageUrl="/joystick.png"
						title="3D CAD, 3D printing, Electonic circuit, embed HDI"
						description="Home made Joystick"
					/>
				</Box>
			</Box>
		</Flex>
	</>
	);
}
