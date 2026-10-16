"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"}]];
const rig: Rig[] = [{"fx":"flash","n":[0],"o":[12,12]}];

export const BoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoltIcon.displayName = "BoltIcon";
