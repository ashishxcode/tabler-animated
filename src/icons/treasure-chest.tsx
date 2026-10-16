"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19h16a1 1 0 0 0 1 -1v-9a4 4 0 0 0 -4 -4h-10a4 4 0 0 0 -4 4v9a1 1 0 0 0 1 1"}],["path",{"d":"M3 11h18"}],["path",{"d":"M16 5v14"}],["path",{"d":"M8 5v14"}],["path",{"d":"M12 11v2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,12],[8,12],[12,12]]}];

export const TreasureChestIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TreasureChestIcon.displayName = "TreasureChestIcon";
