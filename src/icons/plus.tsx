"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 5l0 14"}],["path",{"d":"M5 12l14 0"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1],"o":[12,12],"a":90,"sym":true}];

export const PlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlusIcon.displayName = "PlusIcon";
