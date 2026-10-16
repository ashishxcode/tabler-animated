"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 12v9"}],["path",{"d":"M4 13a8 8 0 0 0 14.138 5.13m1.44 -2.56a7.99 7.99 0 0 0 .422 -2.57"}],["path",{"d":"M21 13h-2"}],["path",{"d":"M5 13h-2"}],["path",{"d":"M12.866 8.873a3 3 0 1 0 -3.737 -3.747"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[20,13],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,16.5],[12,17],[4,13],[12.06,5.94]]}];

export const AnchorOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AnchorOffIcon.displayName = "AnchorOffIcon";
