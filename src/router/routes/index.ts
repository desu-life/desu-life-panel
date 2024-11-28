import type { RouteRecordNormalized } from 'vue-router'

// 将modules目录内所有路由文件导入并转换为路由
const modules = import.meta.glob('./modules/*.ts', { eager: true })

function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default
    if (!defaultModule) return
    const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule]
    result.push(...moduleList)
  })
  return result
}

export const appRoutes: RouteRecordNormalized[] = formatModules(modules, [])


// 导入（目前还不存在的）外部链接
const externalModules = import.meta.glob('./externalModules/*.ts', {
  eager: true,
})

export const appExternalRoutes: RouteRecordNormalized[] = formatModules(externalModules, [])
