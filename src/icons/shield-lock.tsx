"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"}],["path",{"d":"M11 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M12 12l0 2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"a":0.1}];

export const ShieldLockIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShieldLockIcon.displayName = "ShieldLockIcon";
