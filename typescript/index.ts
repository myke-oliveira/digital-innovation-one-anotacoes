interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario {
  role: 'gerente' | 'coordenador' | 'supervisor'
}

function redirecione (user: IUsuario | IAdmin) {
  if ('role' in user) {
    console.log('Redirecione para a administração.')
    return
  }
  console.log('Redirecione para a supervisoria.')
}