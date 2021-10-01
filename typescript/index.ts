interface IUsuario {
  id: string;
  email: string;
  role?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione (user: IUsuario) {
  if (user.role) {
    console.log('Redirecionar para a Administradoria.')
    return
  }
  console.log('Redirecionar para a Supervisoria,')
}