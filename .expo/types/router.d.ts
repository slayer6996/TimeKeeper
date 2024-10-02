/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(header)` | `/(header)/AddTask` | `/(header)/Calendar` | `/(header)/Header` | `/(tabs)` | `/(tabs)/Home` | `/(tabs)/Profile` | `/(tabs)/Reminder` | `/(tabs)/Tasks` | `/AddTask` | `/Calendar` | `/Header` | `/Home` | `/Profile` | `/Reminder` | `/Tasks` | `/_sitemap` | `/components/TabBar` | `/components/addTaskFormComponents/AddTaskForm` | `/components/addTaskFormComponents/AddTaskFormHeader` | `/components/addTaskFormComponents/DaySelector` | `/components/addTaskFormComponents/TaskTags` | `/components/addTaskFormComponents/TimeSelector`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
