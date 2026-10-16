"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 15l9 6l9 -6l-9 -6l-9 6"}],["path",{"d":"M3 9l9 6l9 -6l-9 -6l-9 6"}],["path",{"d":"M3 9l0 6"}],["path",{"d":"M21 9l0 6"}],["path",{"d":"M12 3l0 6"}],["path",{"d":"M12 15l0 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12,12],"a":0.1}];

export const BrandCodepenIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandCodepenIcon.displayName = "BrandCodepenIcon";
