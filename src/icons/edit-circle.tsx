"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3"}],["path",{"d":"M16 5l3 3"}],["path",{"d":"M9 7.07a7 7 0 0 0 1 13.93a7 7 0 0 0 6.929 -6"}]];
const rig: Rig[] = [{"fx":"write","n":[0,1,2],"o":[11.99,12]}];

export const EditCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EditCircleIcon.displayName = "EditCircleIcon";
