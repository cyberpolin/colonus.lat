"use client"

import Image from "next/image"
import { z } from "zod"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { DELETE_ACCOUNT } from "../../graphql.gql"
import { useMutation } from "@apollo/client"

const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z
    .string()
    .trim()
    .regex(/^[0-9]{4}$/, "PIN debe ser de 4 digitos"),
})

type LoginSchema = z.infer<typeof loginSchema>
type DeleteAccountProps = { variables: LoginSchema }

const FormComponent = ({
  deleteAccount,
  error,
  loading,
}: {
  deleteAccount: (variables: DeleteAccountProps) => void
  error: any
  loading: boolean
}) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnChange={true}
      validate={(values) => {
        try {
          loginSchema.parse(values)
          return true
        } catch (error: any) {
          const errors = {}
          console.log("error", error.issues[0])
          error.issues.reverse().forEach((issue: any) => {
            // @ts-ignore
            errors[issue.path[0]] = issue.message
          })
          return errors
        }
      }}
      onSubmit={(variables) => {
        console.log("SUBMITING", variables)

        deleteAccount({ variables })
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form className="w-6/12">
          <h3 className="text-xl mb-4">Lamentamos verte marchar...</h3>
          <p className="text-sm mb-2">
            ¿Estás seguro de que quieres eliminar tu cuenta?
          </p>
          <p className="text-sm mb-2">
            Si decides eliminar tu cuenta, perderás todos tus datos y no podrás
            recuperarlos.
          </p>

          <p className="text-sm mb-2  ">
            Por favor ingresa tu nombre de usuario y contraseña, una ves hecho
            esto, te enviaremos un correo para confirmar tu desición.
          </p>
          <div className="text-right flex-col">
            <Field
              name="email"
              className="border w-full mt-4 rounded border-gray-300 bg-yellow-400 p-2"
              type="text"
              placeholder="Ingrese su correo"
            />
            <ErrorMessage
              className="text-red-700 text-xs"
              name="email"
              component="span"
            />
            <Field
              name="password"
              className="border w-full mt-4 rounded border-gray-300 bg-yellow-400 p-2"
              type="password"
              placeholder="PIN (4 digitos)"
            />
            <ErrorMessage
              className="text-red-700 text-xs"
              name="password"
              component="span"
            />
            <br />
            <button
              type="submit"
              disabled={isSubmitting || !!Object.keys(errors).length}
              className="border self-end border-blue-500 text-blue-500 p-2 rounded w-1/2 mt-4 "
            >
              Eliminar cuenta
            </button>
            {error && <p className="text-red-700 text-xs">{error.message}</p>}
          </div>
        </Form>
      )}
    </Formik>
  )
}

const Goodbye = () => {
  return (
    <>
      <h3>Iniciaste la eliminación de tu cuenta</h3>
      <p>Te hemos enviado un correo para confirmar tu desición.</p>
      <p>
        Una ves que recibamos dicha confirmación tus datos seran eliminados para
        siempre, y no habra manera de recuperarlos.
      </p>
    </>
  )
}

export default function DeleteAccount() {
  const [deleteAccount, mutData] = useMutation(DELETE_ACCOUNT, {
    onError: (error) => {
      console.log("error", JSON.stringify(error, null, 2))
      // reset()
    },
  })

  const { data, error, called, loading } = mutData
  const success = called && !error && data?.deleteAccount?.success
  return (
    <main className="flex justify-center content-center min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <Image src="/next.svg" alt="Colonus.lat" width="220" height="67" />
      </div>
      {!!!success ? (
        <FormComponent
          deleteAccount={deleteAccount}
          error={error}
          loading={loading || false}
        />
      ) : (
        <Goodbye />
      )}
      <div className="flex justify-center w-full"></div>
    </main>
  )
}
