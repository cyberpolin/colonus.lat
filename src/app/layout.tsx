import { ApolloProvider } from "@apollo/client"
import "./globals.css"
import { Inter } from "next/font/google"
import client from "../lib/apollo-client"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Colonus - micro government system",
  description: "Micro goverment system",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ApolloProvider client={client}>{children}</ApolloProvider> */}
        {children}
      </body>
    </html>
  )
}
