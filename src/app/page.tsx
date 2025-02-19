import { ArrowRight, Copy, Mail } from "lucide-react";

import { InputField, InputIcon, InputRoot } from "@/components/Input";
import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";

export default function Home() {
  return (
    <main>
      <Button type="submit">
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail className="size-5"/>
          </InputIcon>
          <InputField />
        </InputRoot>
        <InputRoot error>
          <InputIcon>
            <Mail className="size-5"/>
          </InputIcon>
          <InputField />
        </InputRoot>

      </div>
    </main>
  );
}
