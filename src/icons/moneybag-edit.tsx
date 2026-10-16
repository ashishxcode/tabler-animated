"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5"}],["path",{"d":"M11 21h-3a4 4 0 0 1 -4 -4v-1a8 8 0 0 1 14.376 -4.833"}],["path",{"d":"M18.42 15.61a2.1 2.1 0 1 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39"}]];
const rig: Rig[] = [{"fx":"write","n":[0,2],"o":[15,12.5]}];

export const MoneybagEditIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoneybagEditIcon.displayName = "MoneybagEditIcon";
