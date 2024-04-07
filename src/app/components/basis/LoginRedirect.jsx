import React from 'react'
import { redirect } from 'react-router-dom'

const LoginRedirect = () => 
redirect(`/login?redirectTo=${window.location.pathname}${window.location.search}`);

export default LoginRedirect