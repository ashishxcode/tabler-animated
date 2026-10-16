"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 8v4"}],["path",{"d":"M12 16h.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12.01,16],"a":0.4,"dl":0.12},{"fx":"pop","n":[0],"o":[12,10],"a":0.05}];

export const AlertSmallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlertSmallIcon.displayName = "AlertSmallIcon";
