import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { Navlink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <Navlink icon={RiDashboardLine}>Dashboard</Navlink>

        <Navlink icon={RiContactsLine}>Usuários</Navlink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <Navlink icon={RiInputMethodLine}>Formulários</Navlink>

        <Navlink icon={RiGitMergeLine}>Automação</Navlink>
      </NavSection>
    </Stack>
  )
}
