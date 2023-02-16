import Link from "next/link";
import Image from "next/legacy/image";
import MyButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";

export default function Movies() {
  return (
    <div>
      <h1>My Favorite Movies</h1>
      <MyButton>Click Me</MyButton>
      <MyButton color="danger">Click Me</MyButton>
      <MyButton color="success">Click Me</MyButton>

      <ul>
        <Image
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
          alt="cinema"
          width={640}
          height={426}
          layout="responsive"
        />
        <li>
          <StyledLink href="/movies/hulk">Hulk</StyledLink>
        </li>
        <li>
          <StyledLink href="/movies/spiderman">Spiderman</StyledLink>
        </li>
      </ul>
    </div>
  );
}
