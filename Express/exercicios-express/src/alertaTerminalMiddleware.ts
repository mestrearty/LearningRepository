function alertaTerminalMiddleware(req: any, res: any, next: any) {
  console.log("Requisição Recebida");
  next();
}

export default alertaTerminalMiddleware;
