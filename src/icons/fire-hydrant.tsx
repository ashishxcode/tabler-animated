"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 21h14"}],["path",{"d":"M17 21v-5h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1v-4a5 5 0 0 0 -10 0v4h-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h1v5"}],["path",{"d":"M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 8h12"}]];
const rig: Rig[] = [{"fx":"flicker","n":[0,1,2,3],"o":[12,21]}];

export const FireHydrantIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FireHydrantIcon.displayName = "FireHydrantIcon";
