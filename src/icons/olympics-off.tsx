"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 6a3 3 0 1 0 3 3"}],["path",{"d":"M15 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M9 9a3 3 0 0 0 3 3m2.566 -1.445a3 3 0 0 0 -4.135 -4.113"}],["path",{"d":"M6 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M12.878 12.88a3 3 0 0 0 4.239 4.247m.586 -3.431a3.012 3.012 0 0 0 -1.43 -1.414"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[4],"o":[14.85,15.14],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,9],[18,9],[12,9],[9,15]]}];

export const OlympicsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
OlympicsOffIcon.displayName = "OlympicsOffIcon";
