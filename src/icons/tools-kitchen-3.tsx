"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3"}],["path",{"d":"M14 8a3 4 0 1 0 6 0a3 4 0 1 0 -6 0"}],["path",{"d":"M17 12v9"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2],"o":[12,21],"a":-16}];

export const ToolsKitchen3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ToolsKitchen3Icon.displayName = "ToolsKitchen3Icon";
