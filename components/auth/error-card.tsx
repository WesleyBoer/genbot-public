import { Card, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./back-button";
import Header from "./header";

const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops! Algo deu errado!" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Voltar para página de login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
