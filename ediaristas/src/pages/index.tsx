import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
} from "ui/styles/pages/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <FormElementsContainer>
        <TextFieldMask
          mask={"99.999-99"}
          label={"digite seu CEP"}
          fullWidth
          variant={"outlined"}
        />
        <Typography color={"error"}>CEP inválido</Typography>

        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{ width: "220px" }}
        >
          Buscar
        </Button>
      </FormElementsContainer>

      <ProfissionaisPaper>
        <UserInformation
          name={"Wendey Ricardo"}
          picture={"https://github.com/wendeyricardo.png"}
          rating={3}
          description={"benfica"}
        />
      </ProfissionaisPaper>
    </div>
  );
}
