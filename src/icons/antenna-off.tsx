"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 4v8"}],["path",{"d":"M16 4.5v7"}],["path",{"d":"M12 5v3m0 4v9"}],["path",{"d":"M8 8v2.5"}],["path",{"d":"M4 6v4"}],["path",{"d":"M20 8h-8m-4 0h-4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"wave","n":[3,4,1,0,2,5],"st":0.13,"os":[[8,9.25],[4,8],[16,8],[20,8],[12,13],[12,8]]}];

export const AntennaOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AntennaOffIcon.displayName = "AntennaOffIcon";
