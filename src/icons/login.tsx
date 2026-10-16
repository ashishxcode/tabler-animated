"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}],["path",{"d":"M21 12h-13l3 -3"}],["path",{"d":"M11 15l-3 -3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[1],"o":[14.5,10.5],"d":[2.4,0]}];

export const LoginIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LoginIcon.displayName = "LoginIcon";
