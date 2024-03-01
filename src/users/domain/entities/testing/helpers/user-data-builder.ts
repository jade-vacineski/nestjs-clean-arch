/* eslint-disable @typescript-eslint/no-unused-vars */
import { faker } from '@faker-js/faker'
import { UserProps } from '../../user.entity'

type Props = {
  name?: string
  email?: string
  password?: string
  createAt?: Date
}

export function UserDataBuilder(props: Props): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    createdAt: props.createAt ?? new Date(),
  }
}
