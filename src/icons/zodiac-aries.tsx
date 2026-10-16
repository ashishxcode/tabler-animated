"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 5a5 5 0 1 0 -4 8"}],["path",{"d":"M16 13a5 5 0 1 0 -4 -8"}],["path",{"d":"M12 21l0 -16"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06}];

export const ZodiacAriesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZodiacAriesIcon.displayName = "ZodiacAriesIcon";
