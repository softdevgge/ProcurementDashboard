export const environment = {
    production: false,
    apiHost: (window["env" as unknown as any]["apiHost"as unknown as any]) || "127.0.0.1",
    debug: (window["env" as unknown as any]["debug"as unknown as any]) || false
  };