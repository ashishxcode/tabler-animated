"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21l18 0"}],["path",{"d":"M3 10l18 0"}],["path",{"d":"M5 6l7 -3l7 3"}],["path",{"d":"M4 10l0 11"}],["path",{"d":"M20 10l0 11"}],["path",{"d":"M8 14l0 3"}],["path",{"d":"M12 14l0 3"}],["path",{"d":"M16 14l0 3"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6,7],"o":[12,21],"d":[0,-1.8]}];

export const BuildingBankIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingBankIcon.displayName = "BuildingBankIcon";
