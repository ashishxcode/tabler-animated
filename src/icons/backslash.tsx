"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 5l10 14"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.12}];

export const BackslashIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BackslashIcon.displayName = "BackslashIcon";
