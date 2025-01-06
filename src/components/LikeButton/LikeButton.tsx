import React, {useEffect} from "react";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleLike, setLikes } from "@/redux/features/like/LikeSlice";
import styled from "styled-components";
import { useTranslations } from "next-intl";

const LikeButtonStyled = styled.button<{ liked: boolean }>`
  background-color: ${(props) => (props.liked ? "red" : "grey")};
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.liked ? "#cc0000" : "#666666")};
  }
`;

interface LikeButtonProps {
  productId: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ productId }) => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const isLiked = useAppSelector((state) => state.liker.likes[productId]);
  

  const handleToggleLike = () => {
    dispatch(toggleLike(productId)) ;
  };

  useEffect(() => {
    const savedLikes = localStorage.getItem("like");
    if (savedLikes) {
      dispatch(setLikes(JSON.parse(savedLikes)));
    }
  }, [dispatch]);

  return (
    <LikeButtonStyled liked={isLiked} onClick={handleToggleLike}>
      {isLiked ? useTranslations("ProductsPageView")("unlikeButton") : useTranslations("ProductsPageView")("likeButton")}
    </LikeButtonStyled>
  );
};

export default LikeButton;
