"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M8.469 8.46a5 5 0 0 0 7.058 7.084"}],["path",{"d":"M16.913 12.936a5 5 0 0 0 -5.826 -5.853"}],["path",{"d":"M12 7v-4"}],["path",{"d":"M11 3h2"}],["path",{"d":"M15.536 8.464l2.828 -2.828"}],["path",{"d":"M17.657 4.929l1.414 1.414"}],["path",{"d":"M17 12h4"}],["path",{"d":"M21 11v2"}],["path",{"d":"M18.364 18.363l-.707 .707"}],["path",{"d":"M12 17v4"}],["path",{"d":"M13 21h-2"}],["path",{"d":"M8.465 15.536l-2.829 2.828"}],["path",{"d":"M6.343 19.071l-1.413 -1.414"}],["path",{"d":"M7 12h-4"}],["path",{"d":"M3 13v-2"}],["path",{"d":"M5.636 5.637l-.707 .707"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"dl":0.25},{"fx":"pop","n":[9],"o":[18.01,18.72],"a":0.35,"dl":0.2},{"fx":"pop","n":[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.27,12.72],[14.04,9.97],[12,5],[12,3],[16.95,7.05],[18.36,5.64],[19,12],[21,12],[12,19],[12,21],[7.05,16.95],[5.64,18.36],[5,12],[3,12],[5.28,5.99]]}];

export const VirusOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VirusOffIcon.displayName = "VirusOffIcon";
