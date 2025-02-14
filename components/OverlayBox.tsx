import { Box, Text, Image } from "@chakra-ui/react";

type OverlayBoxProps = {
	imageUrl: string;
	title: string;
	description: string;
	onClick: () => void;
};

const OverlayBox: React.FC<OverlayBoxProps> = ({ imageUrl, title, description, onClick }) => (
	<Box
		position="relative"
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
		onClick={onClick}
		cursor="pointer"
		overflow="hidden"
	>
		<Box position="absolute" top="0" left="0" width="100%" height="100%" overflow="hidden" >
			<Image
				src={imageUrl}
				alt={title}
				objectFit="cover"
				w="100%"
				h="100%"
				transition="transform 0.3s ease-in-out"
				_hover={{ transform: "scale(1.05)" }}
			/>
		</Box>
		<Box
			position="absolute"
			top="0"
			left="0"
			width="100%"
			height="100%"
			bg="rgba(0, 0, 0, 0.5)"
			zIndex="1"
			pointerEvents="none" 
		/>

		{/* テキスト部分 */}
		<Box position="relative" zIndex="2" pointerEvents="none" >
			<Text fontSize="20px" fontWeight="bold">{title}</Text>
			<Text fontSize="16px">{description}</Text>
		</Box>
	</Box>
);

export default OverlayBox;
