"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2"}],["path",{"d":"M16 7h4"}],["path",{"d":"M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3"}]];
const rig: Rig[] = [{"fx":"write","n":[0,1,2],"o":[11.5,11]}];

export const WritingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WritingIcon.displayName = "WritingIcon";
