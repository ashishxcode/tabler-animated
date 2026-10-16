"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h6"}],["path",{"d":"M21 12h-6"}],["path",{"d":"M12 3v6"}],["path",{"d":"M12 15v6"}],["path",{"d":"M5.636 5.636l4.243 4.243"}],["path",{"d":"M18.364 18.364l-4.243 -4.243"}],["path",{"d":"M18.364 5.636l-4.243 4.243"}],["path",{"d":"M9.879 14.121l-4.243 4.243"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7],"o":[12,12],"a":0.1}];

export const BrandZapierIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandZapierIcon.displayName = "BrandZapierIcon";
