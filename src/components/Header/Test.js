import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import styles from './Navbar.module.scss'

export default function Test() {
  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];
  const navItems = [
    {
      name: 'Меню',
      link: 'menu'
    },
    {
      name: 'О нас',
      link: 'about'
    },
    {
      name: 'Доставка и Оплата',
      link: 'payment_order'
    },
    {
      name: 'Контакты',
      link: 'contacts'
    },
  ]
  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle className={styles.test} aria-label="toggle navigation" />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">Меню</Navbar.Link>
          <Navbar.Link isActive href="#">О нас</Navbar.Link>
          <Navbar.Link href="#">Доставка и оплата</Navbar.Link>
          <Navbar.Link href="#">Контакты</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            + 996(555)56-54-45
          </Navbar.Item>
          <Navbar.Link color="inherit" href="#">
            Basket
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
    </Layout>
  )
}
