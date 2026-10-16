"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 21v-5.5l4.5 2.5"}],["path",{"d":"M10 21v-5.5l-4.5 2.5"}],["path",{"d":"M3.5 14.5l4.5 -2.5l-4.5 -2.5"}],["path",{"d":"M20.5 9.5l-4.5 2.5l4.5 2.5"}],["path",{"d":"M10 3v5.5l-4.5 -2.5"}],["path",{"d":"M14 3v5.5l4.5 -2.5"}],["path",{"d":"M12 11l1 1l-1 1l-1 -1l1 -1"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2,3,4,5,6],"o":[12,12],"a":60,"sym":true}];

export const BrandSnowflakeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandSnowflakeIcon.displayName = "BrandSnowflakeIcon";
