# 📋 Instrucciones para agregar el logo

Para que el logo aparezca correctamente en la aplicación, necesitas copiar la imagen a la carpeta `public`:

## Opción 1: Usando la terminal

```bash
# Desde la raíz del proyecto
cp /Users/benja/Desktop/PagResponsabilidad/cropped-logoc-2.jpg public/
```

## Opción 2: Manualmente

1. Abre la carpeta `/Users/benja/Desktop/PagResponsabilidad/`
2. Busca el archivo `cropped-logoc-2.jpg`
3. Cópialo a la carpeta `public/` dentro de tu proyecto React

## Opción 3: Guardar la imagen del attachment

La imagen del logo está adjunta en el chat. Guárdala como `cropped-logoc-2.jpg` en la carpeta `public/` del proyecto.

---

## ✅ Verificar que funciona

Una vez copiada la imagen, deberías verla en el encabezado de la aplicación cuando ejecutes:

```bash
npm run dev
```

o

```bash
docker-compose up app-dev
```

La ruta de la imagen en el código es: `/cropped-logoc-2.jpg` (se sirve desde la carpeta `public/`)
