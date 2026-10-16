"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"}],["path",{"d":"M3 12h13l-3 -3"}],["path",{"d":"M13 15l3 -3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[1],"o":[9.5,10.5],"d":[2.4,0]}];

export const Login2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Login2Icon.displayName = "Login2Icon";
