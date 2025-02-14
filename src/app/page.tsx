"use client";
import Image from "next/image";
import { Box, Flex, Button, Text, VStack, Heading, HStack } from "@chakra-ui/react";
import OverlayBox from "../../components/OverlayBox";
import { useState } from "react";

export default function ProfilePage() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [targetUrl, setTargetUrl] = useState<string | null>(null);

	const handleOverlayClick = (url: string) => {
		setTargetUrl(url);
		setIsModalOpen(true);
	};

	const handleOkClick = () => {
		if (targetUrl) {
			window.open(targetUrl, "_blank");
		}
		setIsModalOpen(false);
	};
	return (
		<>
			<Flex
				justifyContent="center"
				alignItems="center"
				minH="100vh"
				bgImage="url('/spacex.jpg')"
				bgSize="cover"
				color="white"
				textShadow="0px 0px 8px rgba(0,0,0,0.5)"
				bgAttachment="fixed"
			>
				<Box alignItems="flex-start" maxW="600px" w="100%">
					<Box w="100%" display="flex" flexDirection="column" alignItems="center" mt="100px" mb="20px" p={3}>
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
						<Text fontSize="16px">Full-Stack Developer</Text>
						<Text fontSize="16px" textAlign="center">
							Now &lt; Solo Entrepreneur (1 year) &lt; Working for a Manufacturing Company in Research and Development (3y)
							&lt; Master's Degree in Electronic Engineering from a National University (2y)
						</Text>
					</Box>
					<Box maxW="600px" p={3}>
						<Text fontSize="20px" mt={3}>Domain Knowledge</Text>
						<Text fontSize="16px" mb={0}>
							(1y) TypeScript, Next.js, AI-Coding<br />
							(4y) Crypto Trading, Macroeconomics, Electronic Circuit<br />
							(Learning) Business administration, Social Media Marketing<br />
							(Sub) AWS, X Account Management, Stable Diffusion, Fusion 360, 3D Printing, Python, Solidity, C, C++, C#, Verilog HDL<br />
						</Text>
						<Text fontSize="20px" mt={5}>
							What I did for fun ⇓<br />
							I want to leverage my resource for business
						</Text>
					</Box>
					<Box w="100%" display="flex" flexDirection="column" alignItems="center" mb={5}>
						<OverlayBox
							imageUrl="/sakura.png"
							title="Stripe Checkout, Copywriting, PhotoShoot, Web Design"
							description="A branding site for a commemorative silver medal."
							onClick={() => window.open("https://sakura-sigma.vercel.app/", "_blank")}
						/>
						<OverlayBox
							imageUrl="/mySnap.png"
							title="Large-Scale Project with 40,000 Lines of TypeScript – A Pinterest-Like Modernized Social Media Web Application with a Serverless Architecture"
							description="A Japanese AI-art community-driven project."
							onClick={() => handleOverlayClick("https://mysnap16.com/")}
						/>
						<OverlayBox
							imageUrl="/mandara.png"
							title="NFT Marketplace with Real-Time Custom 3D Model Rendering"
							description="A Web3 onboarding project."
							onClick={() => window.open("https://phi3-dmandala.vercel.app/MyPage", "_blank")}
						/>
						<OverlayBox
							imageUrl="/joystick.png"
							title="3D CAD, 3D Printing, Electronic Circuits, and Embedded HDI"
							description="A homemade joystick project."
							onClick={() => window.open("https://youtu.be/95PsJeDtUuk", "_blank")}
						/>
					</Box>
				</Box>
			</Flex>
			{isModalOpen && (
				<Box
					position="fixed"
					top="0"
					left="0"
					width="100vw"
					height="100vh"
					bg="rgba(0, 0, 0, 0.5)"
					display="flex"
					justifyContent="center"
					alignItems="center"
					zIndex="1000"
				>
					<Box
						bg="white"
						p="20px"
						borderRadius="10px"
						boxShadow="lg"
						maxW="400px"
						textAlign="center"
					>
						<Text fontSize="20px" fontWeight="bold" mb="10px" >
							⚠ Warning ⚠
						</Text>
						<Text fontSize="16px" mb="20px">
							This includes sensitive content.<br />
							<Text as="strong" color="red.500">NOT SAFE FOR WORK.</Text>
						</Text>

						<Box display="flex" justifyContent="center" gap="30px">
							<Button variant="outline" colorScheme="red" onClick={() => setIsModalOpen(false)}>
								Back
							</Button>
							<Button colorScheme="blue" onClick={handleOkClick}>
								Proceed
							</Button>
						</Box>
					</Box>

				</Box>
			)}
		</>
	);
}
