"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12l5 5l10 -10"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12.5,12],"st":0.12}];

export const CheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CheckIcon.displayName = "CheckIcon";
