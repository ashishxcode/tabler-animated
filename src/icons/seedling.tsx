"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"}],["path",{"d":"M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"}],["path",{"d":"M12 20l0 -10"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06}];

export const SeedlingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SeedlingIcon.displayName = "SeedlingIcon";
